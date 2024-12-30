import React from 'react'
import '../App.css';

export default function Navbar() {
    return (
        <>
            <nav className="" style={{ width: '100vw', height: '9vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a'}}>
                <div className="" style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', margin: '10px' }}>
                    <a className="" href="/">
                        <img src="/img/dashboard.png" alt="Logo" style={{
                            width: "50px",
                            height: "50px",
                            padding: "10px"
                        }} />
                        {/* <img src="https://via.placeholder.com/150" alt="Example Image"/> */}

                    </a>
                    <div className="form-group has-search" style={{ width: '40%', height: '80%', marginLeft: "20px", display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>
                <div className="nav-right" style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', margin: '10px' }}>
                    <div className="" style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', margin: '10px' }}>

                        <svg width="10%" height="50%" style={{ backgroundColor: '#334155', borderRadius: '20px', padding: '5px', margin: '0px 10px' }} viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                            <title>mail</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs>

                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
                                <g id="Icon-Set" transform="translate(-412.000000, -259.000000)" fill="#000000">
                                    <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" >

                                    </path>
                                </g>
                            </g>
                        </svg>
                        <svg width="10%" height="50%" style={{ backgroundColor: '#334155', borderRadius: '20px', padding: '5px', margin: '0px 10px' }} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" /></svg>
                        <svg fill="#000000" width="10%" height="50%" style={{ backgroundColor: '#334155', borderRadius: '20px', padding: '5px', margin: '0px 10px' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,23a2,2,0,0,1-2-2h4A2,2,0,0,1,12,23ZM20,6a2,2,0,1,0-2,2A2,2,0,0,0,20,6Zm.707,11.293L19,15.586V10H17v6a1,1,0,0,0,.293.707l.293.293H6.414l.293-.293A1,1,0,0,0,7,16V10a4.98,4.98,0,0,1,5.912-4.912L14.5,3.5a.913.913,0,0,0-.168-.1A7,7,0,0,0,13,3.084V2a1,1,0,0,0-2,0V3.08A7,7,0,0,0,5,10v5.586L3.293,17.293A1,1,0,0,0,4,19H20a1,1,0,0,0,.707-1.707Z" /></svg>
                        <img src="/img/pexels-ravinder-ravi-108844465-29758324.jpg" alt="profile" style={{width:"10%", height: "50%",borderRadius: '20px', margin: '0px 10px' }} />
                    </div>


                </div>
            </nav>
        </>
    )
}
