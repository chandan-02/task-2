const Tab = ({ itm }) => {
    return <div
        className="bg-gray-100 rounded py-2 px-5 "
    >
        <h1>{itm?.name}</h1>
        <a href={itm?.viewerURL} className="text-blue-400 underline">View</a>
    </div >
}

export default Tab