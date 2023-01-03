import {ReactElement, ReactNode} from "react";
import {LayoutConfig} from "src/@core/context/types";
import {AclType, Action} from "../context/AbilityContext";

export type Layout = 'vertical' | 'horizontal' | 'blank' | 'blankWithAppBar'

export type Content = 'full' | 'boxed'

export type AppBar = 'fixed' | 'static' | 'hidden'

export type Footer = 'fixed' | 'static' | 'hidden'

export type ThemeColor = {
  light: string;
  main: string;
  dark: string;
}

export type NavLink = {
  icon?: any
  path?: string
  title: string
  action?: Action
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavGroup = {
  icon?: any
  title: string
  action?: Action
  subject?: string
  badgeContent?: string
  children?: (NavGroup | NavLink)[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}


export type NavSectionTitle = {
  title: string
  action?: Action
  subject?: string
}

export type NavMenu = (NavGroup | NavLink | NavSectionTitle)[]

export type LayoutProps = {
  menu?: NavMenu
  hidden: boolean
  config: LayoutConfig
  children: ReactNode
  saveConfig: (values: LayoutConfig) => void

  appBarContent?: (props?: any) => ReactNode
  footerContent?: (props?: any) => ReactNode
  navMenuContent?: (props?: any) => ReactNode
  navMenuBranding?: (props?: any) => ReactNode
  afterNavMenuContent?: (props?: any) => ReactNode
  beforeNavMenuContent?: (props?: any) => ReactNode
}


export type LayoutPageProps = {
  acl?: AclType
  authGuard?: boolean
  guestGuard?: boolean
  setConfig?: () => void
  getLayout?: (page: ReactElement) => ReactNode
}

export type BlankLayoutProps = {
  children: ReactNode
}

export interface IconParkIconElement extends HTMLElement {
  'icon-id'?: '688456' | '688457' | '688458' | '688576' | '688577' | '688578' | '688579' | '688580' | '688621' | '688750' | '690266';
  name?: 'mail' | 'avatar' | 'protect' | 'plans' | 'APIDoc' | 'generate' | 'purchase' | 'dashboard' | 'daily' | 'lang' | 'password';
  size?: string;
  width?: string;
  height?: string;
  color?: string;
  stroke?: string;
  fill?: string;
  rtl?: string;
  spin?: string;
}
declare global {
  interface HTMLElementTagNameMap {
    'iconpark-icon': IconParkIconElement,
  }
}
