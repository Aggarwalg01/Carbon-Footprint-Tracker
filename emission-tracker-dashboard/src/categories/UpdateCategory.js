export default function Category({ isOpen, onClose }) {
    // return (
    //     <div>
    //         <alert message="category" />
    //     </div>
    // );
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mb-4">Update for today</h2>
                {/* Your form components go here */}
                <form>
                    <input type="text" className="text-base" placeholder="Enter updated value for today"></input><br/>
                    {/* <input type="text" className="text-base pd-5" placeholder="Something else here"></input> */}
                </form>
                <button onClick={onClose} className="bg-blue-500 text-white mt-4 py-2 px-4 rounded text-lg">
                    Close
                </button>
            </div>
        </div>
    );
}