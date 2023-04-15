

export default function LetsConnects(){

    return (
        <div className="py-10 sm:py-20 px-4 sm:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div></div>

                <div>
                    <h4 className="text-tertiary text-xs mb-5">Let's Connect</h4>
                    <div className="w-4/5">
                    
                        <form action="">
                            <div>
                                <input type="text" name="name" id="forName" placeholder="Name" className="inputStyle"/>
                            </div>
                            <div>
                                <input type="email" name="email" id="forEmail" placeholder="Email" className="inputStyle"/>
                            </div>

                            <textarea name="message" id="forMessage" rows={5} placeholder="Write your message here. . ." className="border border-tertiary bg-transparent rounded p-4 my-2 text-sm w-full resize-none"></textarea>

                            <button className="border border-secondary bg-secondary/80 py-2 text-white font-semibold rounded-md text-sm my-3 w-full hover:bg-transparent active:scale-[0.98]">Submit Message</button>
                        </form>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
