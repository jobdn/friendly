export const getActiveNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? {
        textDecoration: "underline",
        fontSize: 17,
      }
    : {};
