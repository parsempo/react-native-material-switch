declare module 'react-native-material-switch' {
    import React, { ReactNode } from 'react'
    import { StyleProp, ViewStyle } from 'react-native'
    export type MaterialSwitchProps = {
        active?: boolean,
        style?: StyleProp<ViewStyle>,
        inactiveButtonColor?: string,
        inactiveButtonPressedColor?: string,
        activeButtonColor?: string,
        activeButtonPressedColor?: string,
        buttonShadow?: StyleProp<ViewStyle>,
        activeBackgroundColor?: string,
        inactiveBackgroundColor?: string,
        buttonRadius?: number,
        switchWidth?: number,
        switchHeight?: number,
        buttonContent?: ReactNode,
        enableSlide?: boolean,
        enableSlideDragging?: boolean,
        switchAnimationTime?: number,
        onActivate?: () => void,
        onDeactivate?: () => void,
        onChangeState?: (state: boolean) => void,
    }

    export class MaterialSwitch extends React.Component<MaterialSwitchProps> {}
}