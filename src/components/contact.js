const Contact = () => {
    return (

        <section class="relative z-10 overflow-hidden bg-base-200 py-20 lg:py-[120px] h-screen">
            <div class="container mx-auto">
                {/* <div class="-mx-4 flex flex-wrap lg:justify-between"> */}
                    <div class="w-full px-4 lg:w-1/2 xl:w-5/12 mx-auto justify-center">
                        <h2>GET IN TOUCH WITH ME</h2>
                        <div class="relative rounded-lg bg-base-200 p-8 shadow-lg sm:p-12">
                            <form>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Phone"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <textarea
                                        rows="6"
                                        placeholder="Your Message"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="bg-accent border-primary w-full rounded border p-3 text-base-200 transition hover:bg-opacity-90"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                {/* </div> */}
            </div>
    
</section >
    )
}
export default Contact