import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
/**
 * @author : ${USER}
 * @creat : ${DATE} ${TIME}
 * @Description : 模块 - 功能简述
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

        }
    }

    /**
     * 生命周期函数 - 页面初始化时调用
     */
    componentDidMount() {

    }

    /**
     * 当组件接收到新的属性或状态改变时触发调用组件重新渲染布局
     * @param nextProps 将要改变的props值（需判断具体的某个值）
     * @param nextState 将要改变的state值（需判断具体的某个值）
     * @param nextContext -
     * @returns {boolean} 返回是否需要重新渲染
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 判断具体的某个值，如：return JSON.stringify(nextProps.data || {}) !== JSON.stringify(this.props.data || {})
        return nextProps !== this.props
    }

    /**
     * 渲染布局
     */
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}


/**
 * 页面布局 CSS 样式
 */
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
    },

});
