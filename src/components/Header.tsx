import { Sparkle } from "phosphor-react";
import './Sidebar.css';

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className='timeline-header'>
      {props.title} 
      <Sparkle />
    </div>
  )
}