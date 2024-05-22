import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import PropTypes from "prop-types";
/**
 * @author : ${USER}
 * @creat : ${DATE} ${TIME}
 * @Description : 模块 - 功能简述
 * 该弹窗常用于从中间弹出
 */
export default class ${NAME} extends React.Component {
    static propTypes = {
        // 用于传入数据，不需要则删除
        data: PropTypes.object,
        // 用于回调，不需要则删除
        callback: PropTypes.func,
    };

    /**
     * 构造函数初始化
     * @param props 组件之间参数传递（请在 propTypes 内 进行声明）
     */
    constructor(props) {
        super(props);
        this.state = {
            // 弹窗显示/隐藏
            isVisible: false,
        }
    }

    /**
     * 显示弹窗
     * @public
     */
    _show = () => {
        if (!this.state.isVisible) {
            this.setState({isVisible: true});
        }
    };

    /**
     * 隐藏弹窗
     * @public
     */
    _hide = () => {
        if (this.state.isVisible) {
            this.setState({isVisible: false});
        }
    };

    /**
     * 按钮事件
     * 常用于Modal按钮的事件回调
     * @private
     */
    _btnOnPress = () => {
        this.setState({isVisible: false}, () => {
            this.props.callback?.();
        });
    };

    /**
     * 渲染布局
     */
    render() {
        return (
            <Modal visible={this.state.isVisible}
                   animationType={"none"}
                   transparent={true}
            >
                <View style={styles.modalView}>
                    <View style={styles.container}>
                        {/*<Text style={styles.titleText}>{"我是标题"}</Text>*/}

                    </View>
                </View>
            </Modal>
        )
    }
}


// 弹窗宽度，默认64为两侧外边距 32 * 2
const VIEW_WIDTH = SCREEN_WIDTH - 64;

/**
 * 页面布局 CSS 样式
 */
const styles = StyleSheet.create({
    modalView: {
        margin: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        position: 'absolute',
        backgroundColor: '#00000080',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    container: {
        width: VIEW_WIDTH,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        paddingHorizontal: 15,
        borderRadius: 20,
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        overflow: 'hidden',
    },
    titleText: {
        color: '#333333',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
        textAlign: 'center',
    },

});
