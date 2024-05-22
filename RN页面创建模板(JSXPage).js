import React from 'react';
import {View, StyleSheet} from 'react-native';
/**
 * @author : ${USER}
 * @creat : ${DATE} ${TIME}
 * @Description : 模块 - 功能简述
 */

/**
 * 类型，主要用于页面的判断（不需要则删除）
 */
class ToolType {
    // 相机权限
    static CAMERA      = 1;
    // 相册权限
    static ALBUM       = 2;
    // 通讯录权限
    static CONTACTS    = 3;
}
export default class ${NAME} extends React.Component {
    /**
     * 构造函数初始化
     * @param props 页面之间参数传递
     */
    constructor(props) {
        super(props);

        // 页面之间参数获取
        // this.param = getParam(props ,'param');
        this.state = {

        }
    }

    /**
     * 生命周期函数 - 页面销毁时调用
     */
    componentWillUnmount() {

    }

    /**
     * 生命周期函数 - 页面初始化时调用
     */
    componentDidMount() {
        // 获取数据
        // this._getData()

    }

    /**
     * 渲染布局
     */
    render() {
        return (
            <View style={styles.container}>
                {/*<NavigationBar title={'标题'}/>*/}

            </View>
        )
    }

    /**
     * 渲染子组件 - 名字根据业务修改
     */
    _renderItem = () => {
        return (
            <View>

            </View>
        )
    }

    /**
     * 获取数据
     */
    _getData = () => {

    }

}

/**
 * 页面布局 CSS 样式
 */
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

});
