import React,{useState} from 'react'
import '../Loginpage/LoginPage.css';
import { useForm } from 'react-hook-form';


export default function App(){
    const { register, handleSubmit,formState} = useForm()

   


    return (
        <div>
            <div className='background'>
                {/* left img container */}
                <div className="color">
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAMFBMVEXk5ueutLfn6eq4vcCrsbTh4+TJzc+1ur3b3t/q7O3Q09Wyt7q7wMLU19nGysy/w8adxsz9AAAD00lEQVR4nO2b27KrIAxAJYDgBf3/vz2gnu62u9tCYhM6w3pq39YEAwFC1zUajUaj0Wg0Go1Go9EQYRgG60MI3sefIG3zF9DZsE7mxrQEK+30AgA/6qin7oj/1tFWFtnBp2iqXxjjVjtI293h9QvLm+xaS1zB9q/Ceeeq+q4G18G7U8/NVfsKVPu3npvrKO3ZrVmiUXWRjSrMmaLSqvYk5+tSzR16adWhTDSllYwq5GX9g2oQUfVTqahSk0TNAiXZdAvqzF8EIMZ+U+X/VD1KVCnHPf5Qmvc/QWUWxaTTAa9p4Zz/ENSe9Uu1aNEIpyky8Y+gcqY/ECKq1Mwnip6idpxnE4WFFFPO4Z9ppgubqHckU+W4RCHQRJVhW1FHUkKlMpXLdKGasi1T+RvSP2CrUokJFVOKydTi66iDicuUKspWpJAKqQ3TTL/XlCrK951+Te7T51PNZYrf7u2Ylcv0a9Z9INdSXNuTL6pPiTW/0VyiHRD3UT2fKeVgIsJ4Mv01+/1uoKxSZuU87QmUcynWO1RKkTLxnp/jc4r7pN+ip1S2A5QDwK79/NfnyCNUw3l4epji0p838Q8wVSrzdcQBIqkYa5N7oHxNdUL9SMUVtdCleaJs/hcULSz/hDomilUlI7oxZnqKi8YZ4H2zXFqaKmiXA/t2CTBmqaNdMu6qz105tyPnAPTur8ZOY/RYU8c02NR7/MpzDnUM/A/Q+SU1IN904w8z9baKHtlnhsGGZZ61i+h5XUZb07A/AQCd9RG7/awXeERa55kjjmFcllW7lEUJNW0fQEjh7WqQjg5+3Ax3v8fE355K6HXt4wQgagvgez1tjyHOlyilJrcEoWkArA/zO8enCLveW+bQpmAWad7mWB1Dy9jYCWMcc+zJhJqYypW0FpUH81GWY4mFIazYaD66jp/9YMHPF3juuE8eUviX9RIWoz70DcTa/rJ4/nfVH9hcAYzTxZ4bl7/ygrNXZRSMuTa1YLx64O9cLw0ruZXrVFVdtcMG/7mAHq7XXE9C5ikJSXW9QHSgth3kqU70kpDayZHLRP1YuURjVEmqw0eT/hnCbIV+BoMD/8yL2nBQitFIVXILD0IVtXFBXOLQVVHvPPG3zRQQXenoy2Ya5VnF/5HuIB5Piniq8ssgobFPlF0CUx4UUim8WJcLaWFSXdAJjackqMXP3S9WzTcFUdGCjiqpufTGnB1ULSuqsjerglPUTm5OiQ9+OqzIi6nkZLqTOaVa8c80t41edNo/TPPaFAVq/V/kPfcQTyiV+SSRe0f6mjxTLY/LmlChBnJEG436+Af4DDRi93dARQAAAABJRU5ErkJggg==" width={30} height={30}></img>
                        <p>Cloud Mantri</p>
                    </div>
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg" width={385} height={400} alt="" />
                </div>
                {/* right login container */}
                <div className='wrapper'>
                    <form onSubmit={handleSubmit(console.log)}>
                        <h1>Log In</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                style={{ padding: '20px' }}
                                placeholder='Enter your email'
                                required
                                id="email"
                                name='Email'
                                {...register("Email",{ required: true})}
                               // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                style={{ padding: '20px' }}
                                placeholder='Password'
                                required
                                id="password"
                               
                               
                                name='Password'
                                {...register("Password",{required: true})}
                                //onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input
                                    type="checkbox"
                                    
                                    //onChange={handleCheckboxChange}
                                    {...register("checkbox")} name = 'checkbox'
                                />
                                Keep Me logged In
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <a href="#">Sign Up</a></p>
                        </div>

                        <div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" , marginTop:"25px" }}>
                                <p style={{ width: '4rem', backgroundColor: "black", height: "1px" }}></p>
                                <p> Or continue with </p>
                                <p style={{ width: '4rem', backgroundColor: "black", height: "1px" }}></p>
                            </div>

                            <div >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" , marginTop:"25px", gap:"25px" }}>
                                    <img src="https://imgs.search.brave.com/g17BH7ApM9d8-w9e-JPSNcH8j_6dKtlc-P0jl3lYp6Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGIyNDZlZGM5/Y2MxOTI5ODg1NTU5/YTA0YTYxNTEwMjZi/NTZlZDY4NGE2ODVm/OGVjNTg4MzE3ZDMz/YjdhNDI4Yi93d3cu/Z29vZ2xlLmNvbS8" alt="" />
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD30lEQVR4AayShW4cMRCGLQgzHArKDK9xor5KnyDMSZmZmZmZRWWuKMy8e3y7U8/KvXG6PlR+6dM3Wtv/tElYulnzHXI918HnvQZ7PNfgGfdvz1XQEJzFtz14B++y+crCO+D2XoG97ssw475swhwuGWSOK26T3zX24luWbZbehTxe1uS+YOiuCzGwOB+3mA2yAvcFU8cO7Mrsf30R3Lz4nfMcL+eglZyNkm3QGXZhJ0snzrOw3nE61uc4zQs4wmKOxC3PaIszZA4/I2On6zSsY8ni4P9Kx6loX/WJMCCOk5G47dCZ+r79HLtxR8LfueN45F318TDEORYiW4TJHBcvbf8QhT/TJoRiJkQME2bCJvRpJnwaM8TbuX24Q/k3wS82VR0JwRwOB8nSjF5xJgRvhgxIEtEj3kngLibHcQzc1YdDetWhICSj8iD5UW8MUsX+PoBGdNzJ/qXqQHBv5f4AVHCEBX4yp1LMG26EIJ2I+2hpFn18J8OsuQi5lXv9MxV7/ZAul35HIY0k7cCduJtV7tN95bt0sNgdt5g1sjR/GrX/+E9+j8DyI35xV7eh6q/cpftY2Q5tDwfSoVxYj5jwf5Yf4qV0j+bknXtY2bbZZxxIh9KtlkERfjaD52QFcgdSvl17xkq3zP4u3TwDSAlZAZ2pgmeZgrtZ6aZpraRrGpR0kuVZFTpXv1eBu1lpx5RW3DEFFu1kmWzSM21AiehC04wWc/uUxorbpn4XtU6CiuLWKcvZ5HVPxN7ZQkZwNytqnnxW1DwBSGETWSabnPsSkjuV4G5W2DC+hwPJyCZdL/22ngLJYt7DihonfAW1Y2BRR5bJJhtvaeL9OFoJ7mZrGiC3sHb8b6vlcdswFATRL2ZCDagAX12H+3DOOWe7A8d2fFQZlsRMXpzu6z8kVnGdPcDgDbRJ5InP/nFB3lFOTMlck1TVuW8gD8wzcRO3FeQfFvfeQUbeQU5M2K0yOGBJXlVjcmaO1HFTsernecPZTd/c3ZQ0CeTM7M+S3L0MNWbpT/a94abql7ebXDrburidECiZa5LsspZUZO+kzNI2Z31r9JPsmlx7M2namzHZG7J1vaQkp6qBff09csYN3FKS6jt5w1mPA2stos8sCb/b6zFzIPMcduOG+kzORjpurUaBtRKRuRwSsz8LqnpWQuaoV8MAu9V3VF/MG9Zi2DQXAxrwUlhSENeZA7aWwyY/+bc1tkKu/hOXxkLwZswHVLlTUlINNW0mjFnswC71W+FtGLOd+9ps+7k2qw/MtEmSrlNZB+c6z5jBrPo3nZNjzXQm1FTrjgSp6dYDakr3oFd9U+9y1lO9tTZT6gAAAABJRU5ErkJggg=="></img>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};


