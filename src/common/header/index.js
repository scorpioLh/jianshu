import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators }  from './store'
import {
	HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from "./style"

class Header extends Component {
	getListArea() {
		const { focused, list } = this.props
		if (focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							list.map(item => {
								return <SearchInfoItem key={item}>{item}</SearchInfoItem>
							})
						}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null
		}
	}

	render() {
		const { focused, handleInputFocus, handleInputBlur } = this.props
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
							in={focused}
							classNames='slide'
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={handleInputFocus}
								onBlur={handleInputBlur}
							/>
						</CSSTransition>
						<span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe603;</span>
						{
							this.getListArea()
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
}

const mapStateToProps = (state) => {
	return {
        // focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
			const action = actionCreators.searchBlur()
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)