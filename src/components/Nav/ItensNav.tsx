import Link from "next/link";

interface ItensNavProps {
  link: string;
  routeName: string;
  toggleMenu?: () => void;
}
/**
 *
 * @description O css está na página de Navigation <li>.
 */
export const ItensNav = ({ link, routeName, toggleMenu }: ItensNavProps) => {
  return (
    <>
      <li onClick={toggleMenu}>
        <Link href={link}>{routeName}</Link>
      </li>
    </>
  );
};
