import React from 'react';
import {Text, View} from "react-native";
import {getParam} from "../../NativeUtil/NavigationTool";
/**
 * @author : 张三
 * @creat : 2024/5/21  14:42
 * @Description 模块 - 功能简述；示例：个人中心 - App诊断（已弃用）【正常使用的地方无需写 已弃用 状态】
 */

/**
 * App权限类型
 */
class AppPMType {
    // 相机权限
    static CAMERA      = 1;
    // 相册权限
    static ALBUM       = 2;
    // 通讯录权限
    static CONTACTS    = 3;
    // 精确位置权限
    static LOCATION    = 4;
}

export default class AppPermissionPage extends React.Component {
    /**
     * 构造函数初始化
     * @param props 页面之间参数传递
     */
    constructor(props) {
        super(props);
        this.state = {
            // 手机权限列表
            list: [],
            // 页面之间参数获取
            data: getParam(this.props ,'data');
        };

        // 全局变量申明(一般为不涉及页面渲染的数据)
        // 页码，默认1
        this.page = 1;
        // 每页条数
        this.pageSize = 10;
    }

    /**
     * 生命周期函数 - 页面销毁时调用
     */
    componentWillUnmount() {
        // 移除监听、移除timer等

    }

    /**
     * 生命周期函数 - 页面初始化时调用
     */
    componentDidMount() {
        // App检测网络是否连接
        this._checkAppNetwork();
        // App检测隐私权限
        this._checkAppPermissionAuth(true);
        // App获取数据
        this._getData();
    }

    /**
     * 渲染布局
     */
    render() {
        return (
            <View style={styles.container}>
				<View style={styles.lineView}/>
                <Text style={styles.titleText}>{"App界面布局渲染"}</Text>

                {this.state.list?.map((item, index) => this._renderItem(item, index)}
            </View>
        )
    }

    /**
     * 渲染子组件
     * @param item 单个数据
     */
    _renderItem(item, index) {
        return (
            <View style={styles.itemBox}
                  key={index + '_renderItem'}
            >
                <Text style={styles.itemTitleText}>{item.title || ''}</Text>
            </View>
        )
    }

    /**
     * Item点击事件
     * @param type 根据 type 类型 判断
     */
    _itemOnPress = (type) => {

    };

    /**
     * 加载网络数据
     */
    _getData = () => {
        // 传入依次为：接口、参数、类型、结果回调
        APIHelper.requestApi(user_center, {}, 'POST', (status, result) => {
            if (status) {

            }
        })
    };

}

/**
 * 页面布局 CSS 样式
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    lineView: {
        width: '100%',
        height: 10,
        backgroundColor: '#F4F5F6',
    },
    titleText: {
        color: '#333333',
        fontSize: 17,
        fontWeight: '500',
    },
    itemBox: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    itemTitleText: {
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
    }
});
