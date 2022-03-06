import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement, useState, useEffect } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {

  const [className, setClassName] = useState('')

  const { asPath } = useRouter()

  useEffect(() => {
    const ItsOnThePage = asPath === rest.href ? activeClassName : '';

    setClassName(ItsOnThePage)
  }, [activeClassName, rest.href, asPath])

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}