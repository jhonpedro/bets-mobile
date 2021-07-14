import React from 'react'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { actionWithdrawModal } from '../../../store/reducers/modal/actions'
import modalSelector from '../../../store/selectors/modalSelector'
import getDimensions from '../../../utils/getDimensions'
import ButtonOutline from '../../Bet/ButtonOutline'
import ModalAnimation from '../Animation'
import {
	ButtonsContainer,
	ModalContainer,
	ModalMessage,
	ModalTitle,
} from './styles'

const Modal = () => {
	const { title, message } = modalSelector()
	const dispatch = useAppDispatch()

	const handleWithdrawModal = () => {
		dispatch(actionWithdrawModal())
	}

	return (
		<ModalAnimation>
			<ModalContainer>
				<ModalTitle>{title}</ModalTitle>
				<ModalMessage>{message}</ModalMessage>
				<ButtonsContainer>
					<ButtonOutline
						title="Close"
						onPress={handleWithdrawModal}
						titleSize={getDimensions(1).rem}
					/>
				</ButtonsContainer>
			</ModalContainer>
		</ModalAnimation>
	)
}

export default Modal
