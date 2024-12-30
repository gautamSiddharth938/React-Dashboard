import React from 'react'
import './Menu.css'

export default function Menu() {
    return (
        <div className='menuItem'>

            <div className="" style={{ display: 'flex', justifyContent: 'spacebetween', alignItems: 'center',padding: '2px', margin: '2px 0px', borderRadius: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '80%' }}>
                    <svg height="8%" width="8%" style={{ backgroundColor: '#9a3412', borderRadius: '20px', padding: '2px' }} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#f97316">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0 fill:#ff8800; </style> <g> <path class="st0" d="M463.515,236.436c-4.627-49.732-26.735-94.499-60.104-127.839c-33.341-33.369-78.115-55.484-127.846-60.112V0 h-39.129v48.485c-49.717,4.627-94.491,26.742-127.831,60.112c-33.37,33.34-55.477,78.108-60.12,127.839H0v39.129h48.484 c4.643,49.732,26.75,94.498,60.12,127.838c33.34,33.362,78.114,55.477,127.831,60.112V512h39.129v-48.484 c49.731-4.636,94.505-26.75,127.846-60.112c33.369-33.34,55.477-78.107,60.104-127.838H512v-39.129H463.515z M422.953,275.565 c-4.47,38.62-21.964,73.172-48.069,99.312c-26.148,26.112-60.692,43.592-99.32,48.07v-69.339h-39.129v69.332 c-38.613-4.47-73.172-21.95-99.305-48.062c-26.119-26.14-43.599-60.692-48.069-99.312h69.332v-39.129H89.061 c4.47-38.621,21.95-73.172,48.069-99.313c26.134-26.112,60.692-43.599,99.305-48.069v69.339h39.129V89.054 c38.627,4.47,73.171,21.957,99.32,48.069c26.105,26.141,43.599,60.692,48.069,99.313h-69.346v39.129H422.953z" /> <path class="st0" d="M256.007,233.993C243.843,233.993,234,243.85,234,256c0,12.15,9.843,22.007,22.008,22.007 c12.15,0,22.007-9.858,22.007-22.007C278.014,243.85,268.157,233.993,256.007,233.993z" /> </g> </g>
                    </svg>
                    <span style={{ color: 'white', padding: '5px' }}>Goals</span>

                </div>
                <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '20%' }}>

                    <svg width="20%" height="20%" style={{ borderRadius: '20px', backgroundColor: '#4b5563', padding: '5px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L15 12L8 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div>

            <div className="" style={{ borderRadius: '100%', display: 'flex', justifyContent: 'spacebetween', alignItems: 'center', margin: '2px 0px', padding: '2px' }}>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '80%' }}>

                    <svg fill="#1100ff" height="8%" width="8%" style={{ backgroundColor: '#1e3a8a', borderRadius: '20px', padding: '2px' }} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" stroke="#1100ff">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier">

                            <path d="M14 6C7.480469 6 2.214844 11.183594 2.03125 17.65625L0.1875 20.21875C-0.121094 20.660156 -0.0273438 21.269531 0.40625 21.59375C0.910156 21.972656 1.445313 22.265625 2 22.5L2 26.5625C0.804688 27.253906 0 28.519531 0 30C0 31.480469 0.804688 32.746094 2 33.4375L2 39C2 41.746094 4.253906 44 7 44L43 44C45.746094 44 48 41.746094 48 39L48 33.4375C49.195313 32.746094 50 31.480469 50 30C50 28.519531 49.195313 27.253906 48 26.5625L48 22.59375C48.636719 22.351563 49.242188 22.023438 49.8125 21.59375C50.023438 21.433594 50.164063 21.195313 50.199219 20.929688C50.234375 20.664063 50.164063 20.398438 50 20.1875L47.96875 17.625C47.765625 11.167969 42.507813 6 36 6 Z M 14 8L36 8C41.226563 8 45.445313 11.914063 45.9375 17L4.0625 17C4.554688 11.914063 8.773438 8 14 8 Z M 17.5 9C16.671875 9 16 9.671875 16 10.5C16 11.328125 16.671875 12 17.5 12C18.328125 12 19 11.328125 19 10.5C19 9.671875 18.328125 9 17.5 9 Z M 12.5 10C11.671875 10 11 10.671875 11 11.5C11 12.328125 11.671875 13 12.5 13C13.328125 13 14 12.328125 14 11.5C14 10.671875 13.328125 10 12.5 10 Z M 15.5 13C14.671875 13 14 13.671875 14 14.5C14 15.328125 14.671875 16 15.5 16C16.328125 16 17 15.328125 17 14.5C17 13.671875 16.328125 13 15.5 13 Z M 3.53125 19L46.5 19L47.6875 20.5C45.789063 21.457031 43.582031 21.328125 41.8125 20C41.492188 19.761719 41.0625 19.738281 40.71875 19.9375L39.125 20.84375C39.113281 20.84375 39.105469 20.84375 39.09375 20.84375C37.191406 21.96875 35.003906 21.949219 33.21875 20.84375C33.207031 20.84375 33.199219 20.84375 33.1875 20.84375L31.59375 19.9375C31.304688 19.773438 30.953125 19.761719 30.65625 19.90625L27.6875 21.40625L27.65625 21.40625C26.042969 22.160156 24.175781 22.160156 22.5625 21.40625L22.53125 21.40625L19.5625 19.90625C19.265625 19.761719 18.914063 19.773438 18.625 19.9375L17 20.84375C15.097656 21.96875 12.910156 21.949219 11.125 20.84375C11.113281 20.84375 11.105469 20.84375 11.09375 20.84375L9.5 19.9375C9.15625 19.738281 8.726563 19.761719 8.40625 20C6.621094 21.339844 4.378906 21.453125 2.46875 20.46875 Z M 8.96875 21.90625L10.09375 22.53125L10.0625 22.5625C12.476563 24.058594 15.503906 24.039063 18 22.5625L19.125 21.9375L21.65625 23.1875C21.667969 23.199219 21.675781 23.207031 21.6875 23.21875C23.855469 24.246094 26.363281 24.246094 28.53125 23.21875C28.542969 23.207031 28.550781 23.199219 28.5625 23.1875L31.09375 21.9375L32.1875 22.5625L32.21875 22.5625C34.628906 24.042969 37.605469 24.03125 40.09375 22.5625L41.21875 21.90625C42.683594 22.808594 44.363281 23.175781 46 23.03125L46 26L4 26L4 23.03125C5.695313 23.230469 7.441406 22.847656 8.96875 21.90625 Z M 4 28L46 28C47.191406 28 48 28.808594 48 30C48 31.191406 47.191406 32 46 32L4 32C2.808594 32 2 31.191406 2 30C2 28.808594 2.808594 28 4 28 Z M 4 34L46 34L46 39C46 40.65625 44.65625 42 43 42L7 42C5.34375 42 4 40.65625 4 39Z" />

                        </g>

                    </svg>
                    <span style={{ color: 'white', padding: '5px' }}>Popular Dishes</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '20%' }}>

                    <svg width="20%" height="20%" style={{ borderRadius: '20px', backgroundColor: '#4b5563', padding: '5px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L15 12L8 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div>
            <div className="" style={{ borderRadius: '100%', display: 'flex', justifyContent: 'spacebetween', alignItems: 'center', margin: '2px 0px', padding: '2px' }}>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '80%' }}>

                    <svg fill="#00ccff" height="8%" width="8%" style={{ backgroundColor: '#0c4a6e', borderRadius: '20px', padding: '2px', enableBackground: 'new 0 0 122.88 91.14' }} viewBox="0 -15.87 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#00ccff">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <g> <path d="M59.78,88.76h53.35l5.79-6.09H54.89L59.78,88.76L59.78,88.76z M26.48,51.68c-0.17-0.56-0.76-0.88-1.31-0.71 c-0.56,0.17-0.88,0.76-0.71,1.32c0.95,3.15,2.53,5.75,4.45,7.76c2.1,2.2,4.63,3.67,7.2,4.34c0.56,0.15,1.14-0.2,1.29-0.76 c0.15-0.56-0.2-1.14-0.76-1.29c-2.21-0.57-4.38-1.85-6.2-3.76C28.73,56.82,27.33,54.49,26.48,51.68L26.48,51.68L26.48,51.68 L26.48,51.68z M82.74,17.67h-0.28c0-2.32-0.87-4.35-2.6-6.09c-1.73-1.73-3.76-2.6-6.09-2.6V8.69c2.32,0,4.35-0.87,6.09-2.61 c1.73-1.74,2.6-3.77,2.6-6.09h0.28c0,2.32,0.87,4.35,2.6,6.09s3.76,2.6,6.09,2.6v0.28c-2.32,0-4.35,0.87-6.09,2.6 C83.61,13.31,82.74,15.34,82.74,17.67L82.74,17.67L82.74,17.67z M95.66,36.21h-0.13c0-1.06-0.4-2-1.2-2.79s-1.73-1.19-2.79-1.19 v-0.13c1.06,0,2-0.4,2.79-1.19c0.8-0.8,1.2-1.73,1.2-2.79h0.13c0,1.06,0.4,2,1.2,2.79c0.79,0.8,1.72,1.2,2.79,1.2v0.13 c-1.06,0-2,0.4-2.79,1.19C96.06,34.22,95.66,35.15,95.66,36.21L95.66,36.21L95.66,36.21z M107.32,23.78h-0.24 c0-1.95-0.73-3.65-2.18-5.11c-1.46-1.46-3.16-2.19-5.11-2.19v-0.24c1.95,0,3.65-0.73,5.11-2.19c1.46-1.46,2.18-3.16,2.18-5.11h0.24 c0,1.95,0.73,3.65,2.19,5.11s3.16,2.19,5.11,2.19v0.24c-1.95,0-3.65,0.73-5.11,2.19C108.04,20.13,107.32,21.83,107.32,23.78 L107.32,23.78L107.32,23.78z M42.77,17.99c7.94,0,15.14,3.22,20.35,8.43c5.21,5.21,8.43,12.4,8.43,20.35c0,2.67-0.36,5.25-1.04,7.7 H82c0.49-2.49,0.74-5.07,0.74-7.7c0-11.04-4.47-21.03-11.71-28.26l0,0l0,0C63.8,11.26,53.81,6.79,42.77,6.79 c-11.04,0-21.03,4.48-28.26,11.71C7.27,25.73,2.8,35.72,2.8,46.76c0,11.04,4.48,21.03,11.71,28.26s17.23,11.71,28.26,11.71 c3.85,0,7.57-0.54,11.09-1.56l-2.32-2.89c-0.2-0.21-0.32-0.5-0.32-0.81c0-0.66,0.53-1.19,1.19-1.19h4.44l-4.99-6.21 c-2.86,0.95-5.91,1.47-9.09,1.47c-7.94,0-15.14-3.22-20.35-8.43s-8.43-12.4-8.43-20.35c0-7.94,3.22-15.14,8.43-20.35 C27.63,21.21,34.83,17.99,42.77,17.99L42.77,17.99L42.77,17.99z M68,54.47c0.74-2.44,1.14-5.02,1.14-7.7 c0-7.28-2.95-13.88-7.73-18.65l0,0c-4.78-4.77-11.37-7.73-18.65-7.73c-7.28,0-13.88,2.95-18.65,7.73 c-4.78,4.78-7.73,11.37-7.73,18.65s2.95,13.88,7.73,18.65c4.77,4.77,11.37,7.73,18.65,7.73c4.59,0,8.9-1.17,12.66-3.23L51.49,65 c-0.41-0.51-0.33-1.26,0.18-1.67c0.22-0.18,0.48-0.26,0.74-0.26v0h4.44l-5.36-6.68c-0.41-0.51-0.33-1.26,0.18-1.67 c0.22-0.18,0.48-0.26,0.74-0.26v0H68L68,54.47z M57.47,68.66l0.15-0.1l0.16,0.49l2.12,2.64H113l5.92-6.23H54.89L57.47,68.66 L57.47,68.66z M42.77,4c11.81,0,22.5,4.79,30.24,12.53c7.74,7.74,12.53,18.43,12.53,30.24c0,2.63-0.24,5.2-0.69,7.7h36.85 c0.66,0,1.19,0.53,1.19,1.19c0,0.35-0.15,0.66-0.39,0.88l-6.22,6.54h5.42c0.66,0,1.19,0.53,1.19,1.19c0,0.35-0.15,0.66-0.39,0.88 l-6.22,6.54h5.42c0.66,0,1.19,0.53,1.19,1.19c0,0.35-0.15,0.66-0.39,0.88l-6.22,6.54h5.42v0c0.29,0,0.59,0.11,0.82,0.33 c0.47,0.45,0.49,1.2,0.04,1.68l-7.99,8.41c-0.22,0.27-0.55,0.43-0.92,0.43H59.22v0c-0.35,0-0.69-0.15-0.92-0.44l-2.54-3.17 c-4.09,1.3-8.46,2.01-12.98,2.01c-11.81,0-22.5-4.79-30.24-12.53C4.79,69.27,0,58.58,0,46.76c0-11.81,4.79-22.5,12.53-30.24 C20.26,8.78,30.96,4,42.77,4L42.77,4L42.77,4z M113,80.29l5.92-6.23H54.89l5,6.23H113L113,80.29z M113,63.07l5.92-6.23H54.89 l5,6.23H113L113,63.07z" /> </g> </g>

                    </svg>
                    <span style={{ color: 'white', padding: '5px' }}>Menus</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '20%' }}>

                    <svg width="20%" height="20%" style={{ borderRadius: '20px', backgroundColor: '#4b5563', padding: '5px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L15 12L8 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div>
        </div>
    )
}
