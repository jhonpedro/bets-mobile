import useAppSelector from '../../hooks/useAppSelector'

const modalSelector = () => useAppSelector((state) => state.modal)

export default modalSelector
