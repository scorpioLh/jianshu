import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators }  from './store'
import {
	HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from "./style"

const getListArea = (show) => {
	if (show) {
		return (
			<SearchInfo>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch>换一批</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
				</SearchInfoList>
			</SearchInfo>
		)
	} else {
		return null
	}
}

const Header = (props) => {
	return (
		<HeaderWrapper>
			<Logo href="/" />
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					<span className="iconfont">&#xe636;</span>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						timeout={200}
						in={props.focused}
						classNames='slide'
					>
						<NavSearch
							className={props.focused ? 'focused' : ''}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						/>
					</CSSTransition>
					<span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe603;</span>
					{
						getListArea(props.focused)
					}
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='writting'>写文章</Button>
				<Button className='reg'>注册</Button>
			</Addition>
		</HeaderWrapper>
	)
}

const mapStateToProps = (state) => {
	return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			const action = actionCreators.searchFocus()
			dispatch(action)
		},
		handleInputBlur() {
			const action = actionCreators.searchBlur()
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)