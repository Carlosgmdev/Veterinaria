const Error = ({message}) => {
    return (
        <div className='bg-red-200 text-red-700 p-3 text-center rounded-md font-bold mb-3 uppercase'>
            <p>{message}</p>
        </div>
    )
}

export default Error