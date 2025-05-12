export default function ContactUs () {
    return (
    <div className="pt-24 pb-24 text-center">
        <h1 className="text-3xl font-bold p-4 m-4">Contact Us</h1>
        <div>Hello this is contact us</div>
        <form className="p-10">
            <input type="text" className="border p-2 m-2" placeholder="name"/>
            <input type="text" className="border p-2 m-2" placeholder="message"/>
            <button className="border p-2 m-2 bg-gray-200 rounded-lg" >Submit</button>
        </form>
    </div>)
}


//rafc shorthand for creating dummy component