import InformationBlock from '@/components/gto-page-components/information-block'
import SpringBlock from '@/components/gto-page-components/spring-block'
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const GtoPage: NextPage = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return (
        <Stack sx={{ width: "100%" }}>
            <InformationBlock isDesktop={isDesktop} />
            <SpringBlock isDesktop={isDesktop} />
        </Stack>
    )
}

export default GtoPage