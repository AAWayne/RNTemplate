import React from 'react';
import {View, StyleSheet, RefreshControl, FlatList} from 'react-native';

/**
 * @author : ${USER}
 * @creat : ${DATE} ${TIME}
 * @Description : 模块 - 列表
 */

/**
 * 类型，主要用于页面的判断（不需要则删除）
 */
class ToolType {
    // 相机权限
    static CAMERA = 1;
    // 相册权限
    static ALBUM = 2;
    // 通讯录权限
    static CONTACTS = 3;
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
            // 列表数据
            list: [],
            // 是否正在加载
            isLoading: false,
            // 是否正在下拉刷新中
            isDropRefresh: false,
            // 底部加载状态 LoadingDataState
            loadState: LoadMoreState.hintState,
            // 没有更多数据
            noMoreData: false,
        };

        // 分页参数
        this.pageIndex = 1;
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
                <FlatList
                    style={{flex: 1}}
                    contentInset={{bottom: 20}}
                    extraData={this.state}
                    keyExtractor={(item, index) => 'listItem' + index}
                    data={this.state.list}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isDropRefresh}
                            onRefresh={()=> this.setState({isDropRefresh: true}, this._getData)}
                            colors={['#999999']}
                            title="加载中..."
                        />
                    }
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        this._getData(true)
                    }}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<LoadMoreFooter state={this.state.loadState} noMoreTitle={"我是有底线的~"}/>}
                    ListEmptyComponent={() => <EmptyComponent promptText={"暂无数据"} hideBtn={true}/>}
                />
            </View>
        );
    }

    /**
     * 渲染子组件 - 列表Item
     */
    _renderItem = (item, index) => {
        return (
            <View style={[]}>

            </View>
        );
    };

    /**
     * 获取数据
     * @param isMore 是否为加载更多
     */
    _getData = (isMore=false) => {
        if (!isMore) {
            this.pageIndex = 1;
            this.state.noMoreData = false;
        }

        if (this.state.noMoreData || this.state.isLoading) {
            return;
        }

        // 以下业务自定义
        // let param = {
        //     page: this.pageIndex,
        //     size: 20,
        // }
        // this.state.isLoading = true;
        // APIHelper.requestApi(newfinance_recharge_log, param, 'POST', (status, result) => {
        //     this.state.isLoading = false;
        //     if (status) {
        //         let list = this.state.list || [];
        //         let arr = result?.data?.list || [];
        //         if (isMore) {
        //             // 追加更多数据
        //             list = list.concat(arr);
        //         } else {
        //             list = arr;
        //         }
        //
        //         // 设置加载状态
        //         let noMoreData = result?.data?.current_page === result?.data?.last_page || result?.data?.total_count === 0;
        //         this.state.loadState = noMoreData ? LoadMoreState.notDataState : LoadMoreState.LoadingDataState;
        //         if (list.length === 0) {
        //             this.state.loadState = LoadMoreState.hintState;
        //         }
        //
        //         // 更新数据
        //         this.setState({
        //             data: result?.data,
        //             list: list,
        //             noMoreData: noMoreData,
        //             isDropRefresh: false,
        //         });
        //
        //         // 分页数据自增
        //         this.pageIndex += 1;
        //     } else {
        //         this.setState({
        //             isDropRefresh: false,
        //             loadState: LoadMoreState.hintState,
        //         })
        //     }
        // })
    }

}

/**
 * 页面布局 CSS 样式
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

});
