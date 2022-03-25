import { PageHeader } from 'antd'
import React, { FC } from 'react'

interface Props {
    children: React.ReactNode,
    title: String,
    subTitle: String
}

const Layout: FC<Props> = ({ children, title, subTitle }) => {
    return (
        <div>
            <PageHeader title={title} />
            <div style={{ width: "85%", margin: "0 auto" }}>{children}</div>
        </div>
    )
}

export default Layout