import React from "react";
import { Button } from '../../common'
import { Modal, View } from 'react-native';
import styles from "./styles";

const Index = ({
    visible,
    onOkay,
    onCancel,
    children
}) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
        >
            <View style={styles.center}>
                <View style={styles.container}>
                    {children}
                    <View style={styles.btnContainer}>
                        <Button title="Yes" onPress={() => onOkay()} style={styles.btn} />
                        <Button title="No" onPress={() => onCancel()} style={styles.btn} />
                    </View>
                </View>
            </View>
        </Modal>
    )

}

export default Index