import Link from "next/link";
import {useRouter} from "next/router";
import {NavLink} from "src/@core/layouts/types";
import React, {ElementType, ReactNode} from "react";
import {styled, useTheme} from "@mui/material/styles";
import Box, {BoxProps} from "@mui/material/Box";
import {handleURLQueries} from "src/@core/layouts/utils";
import {LayoutConfig} from "src/@core/context/types";
import * as Icons from "mdi-material-ui";
import UserIcon from "src/@core/layouts/components/UserIcon";
import Translations from "src/@core/layouts/components/Translations";
import CanViewNavLink from "src/@core/layouts/components/acl/CanViewNavLink";
import {CircleOutline} from "mdi-material-ui";
import {ListItem, ListItemButton, ListItemButtonProps, ListItemIcon} from "@mui/material";

const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({theme}) => ({
  width: '100%',
  borderRadius: 4,
  color: theme.palette.text.secondary,
  padding: '0 14px',
  pr: 0,
  transition: 'padding-left .25s ease-in-out, background-color .25s ease-in-out, color .25s ease-in-out',
  '&.hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 500,
  }
}))

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  overflow: 'hidden',
  fontSize: 14,
  height: 45,
  fontWeight: 400
})

type Props = {
  parent: boolean
  item: NavLink
  navHover: boolean
  config: LayoutConfig
}

const NavMenuLink = (props: Props) => {
  const {parent, item, config, navHover} = props;
  const {navCollapsed} = config
  const router = useRouter()
  const theme = useTheme()

  // @ts-ignore
  const IconTag: ReactNode = parent && !item.icon ? CircleOutline : Icons[item.icon]

  const Icon = document.createElement('IconparkIcon') // typeof icon === IconParkIconElement

  const disableGutters = Boolean(parent)

  const isNavLinkActive = () => {
    return router.pathname === item.path || handleURLQueries(router, item.path);
  }
  return (
    <CanViewNavLink navLink={item}>
      <ListItem
        disablePadding
        disableGutters={disableGutters}
        sx={
          parent ?
            {mt: 2} :
            {
              '&:not(:first-of-type)': {
                mt: 2
              }
            }
        }
      >
        <Link passHref href={item.path === undefined ? '/' : `${item.path}`}>
          <MenuNavLink
            component="a"
            className={isNavLinkActive() ? 'active' : ''}
          >
            <ListItemIcon
              sx={{
                color: 'text.primary',
                transition: 'margin .25s ease-in-out',
                mr: navCollapsed && !navHover ? 0 : 2.5,
              }}
            >
              <UserIcon name={item.icon} color={isNavLinkActive() ? theme.palette.primary.main : theme.palette.text.secondary} />
            </ListItemIcon>
            <MenuItemTextMetaWrapper>
              <Translations text={item.title}/>
            </MenuItemTextMetaWrapper>
          </MenuNavLink>
        </Link>
      </ListItem>
    </CanViewNavLink>
  )
}

export default NavMenuLink
