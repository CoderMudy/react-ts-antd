import { Menu } from 'antd'
import React from 'react'
import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <Menu>
        <Menu.Item>
            <Link to="event-sources">事件源</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="rules">事件规则</Link>
        </Menu.Item>
    </Menu>
  )
}

export default Navigation