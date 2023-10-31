import Link from "next/link";

interface ItensNavProps {
  link: string;
  routeName: string;
}
/**
 *
 * @description O css está na página de Navigation <li>.
 */
export const ItensNav = ({ link, routeName }: ItensNavProps) => {
  return (
    <>
      <li>
        <Link href={link}>{routeName}</Link>
      </li>
    </>
  );
};
