import useAppSelector from '../../hooks/useAppSelector'

const authSelector = () => useAppSelector((state) => state.auth)

export default authSelector
