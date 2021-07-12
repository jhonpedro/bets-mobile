import useAppSelector from '../../hooks/useAppSelector'

const cartSelector = () => useAppSelector((state) => state.cart)

export default cartSelector
