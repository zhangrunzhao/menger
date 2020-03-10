<template>
	<view>
		<view class="top-nav bg-white">
			<view class="cu-bar">
				<view class="action" @tap="goBack">
					<text class="cuIcon-back text-gray"></text> #翻皮水#
				</view>
				<view class="action">
					<text class="moreIco cuIcon-more"></text>
				</view>
			</view>
		</view>
		
		<view class="cu-chat chat-class" id="chat_content" :style="{top: scrollTo + 'px'}">
			<view class="cu-item self">
				<view class="main">
					<view class="content bg-skyBlue shadow">
						<text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(../../static/img/tou2.jpg);"></view>
				<view class="date">2018年3月23日 13:23</view>
			</view>
			<view class="cu-info round">对方撤回一条消息!</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(../../static/img/tou1.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<text>喵喵喵！喵喵喵！</text>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view>
			<view class="cu-info">
				<text class="cuIcon-roundclosefill text-red "></text> 对方拒绝了你的消息
			</view>
			<view class="cu-info">
				对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
				<text class="text-blue">发送好友验证</text>
			</view>
			<view class="cu-item self">
				<view class="main">
					<image src="../../static/4.jpg" class="radius" mode="widthFix"></image>
				</view>
				<view class="cu-avatar radius" style="background-image:url(../../static/img/tou2.jpg);"></view>
				<view class="date"> 13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action text-bold text-grey">
						3"
					</view>
					<view class="content bg-skyBlue shadow">
						<text class="cuIcon-sound text-xxl padding-right-xl"> </text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(../../static/img/tou2.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</view>
					<view class="content bg-skyBlue shadow">
						喵星球，喵喵市
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(../../static/img/tou2.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(../../static/img/tou1.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						@#$^&**
					</view>
					<view class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
		</view>
		
		
		<view class="cu-bar foot input input-box" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<view class="text-center" style="width: 80rpx; font-size: 50rpx;">
				<text :class="emojiIcon" @tap="showEmj"></text>
			</view>
			<button class="cu-btn bg-gradual-blue shadow">发送</button>
		</view>
		<!-- <view class="flex">
			<view class="flex-sub padding-left-xs" style="align-self: center;">
				<input type="text" @focus="InputFocus" @blur="InputBlur" :value="inputValue" placeholder-style="font-size:24rpx;color:#aaaaaa;"  placeholder="请输入您要发送的内容" maxlength="300"></input>
			</view>
			
			<view class="text-center" style="width: 80rpx; font-size: 50rpx;">
				<text :class="emojiIcon" @tap="showEmj"></text>
			</view>
			<button class="cu-btn bg-gradual-blue shadow-blur">发送</button>
		</view> -->
	</view>
</template>

<script>
	export default {
		data(){
			return {
				InputBottom:0,
				emojiIcon:'cuIcon-emoji',
				isShowEmj: false,
				scrollTo: 0
			};
		},
		mounted() {
			/* const query = uni.createSelectorQuery().in(this);
			query.select('#chat_content').boundingClientRect(data=>{
				console.log("得到布局位置信息" + JSON.stringify(data));
				console.log("节点离页面顶部的距离为" + data.top);
			}).exec(); */
		},
		methods:{
			
			InputFocus(e){
				console.log(e)
				this.InputBottom = e.detail.height
				this.scrollTo = -e.detail.height
			},
			InputBlur(){
				this.InputBottom = 0
				this.scrollTo = 0
			},
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
			showEmj() {
				let bool = !this.isShowEmj;
				if(bool) {
					this.emojiIcon = 'cuIcon-keyboard';
				} else {
					this.emojiIcon = 'cuIcon-emoji';
				}
				
				this.isShowEmj = bool;
				this.$emit('show')
			}
		}
	}	
</script>


<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	.top-nav{
		padding-top: var(--status-bar-height);
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 9999;
	}
	.chat-class{
		padding-top: var(--status-bar-height);
		margin-top: 100upx;
		background-color: #FAFAFA;
		position: relative;
		transition: top 0.2s;
		padding-bottom: 100upx;
	}
	.input-box{
		transition: bottom 0.2s;
	}
	.bg-skyBlue{
		background-color: #79F2FD;
	}
	
</style>
