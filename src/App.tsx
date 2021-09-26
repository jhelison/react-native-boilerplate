import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import styled from 'styled-components/native'

const MainWrapper = styled.SafeAreaView`
    background: #06092b;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Text = styled.Text`
    color: #fafafa;
    font-size: 36px;
`

const App: React.FC = () => {
    useEffect(() => {
        updateNavigationBarColor()
    }, [])

    const updateNavigationBarColor = () => {
        changeNavigationBarColor('#06092b', false, false)
    }

    return (
        <MainWrapper>
            <StatusBar backgroundColor="#06092b" />
            <Text>React Native Boilerplate</Text>
        </MainWrapper>
    )
}

export default App
