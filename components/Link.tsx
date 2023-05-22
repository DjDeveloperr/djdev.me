import { ComponentChildren } from "preact";

export interface LinkProps {
  label: string;
  url: string;
  icon?: string;
  children?: ComponentChildren;
}

export function Link(props: LinkProps) {
  return (
    <a href={props.url} class="link-item">
      {props.icon
        ? <img class="link-icon" src={props.icon} alt={props.label} />
        : null}
      {props.children}
      <p class="link-label">{props.label}</p>
    </a>
  );
}
