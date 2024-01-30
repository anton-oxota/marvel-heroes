import React from 'react'
import './Loading.scss'

function Loading({ classes }) {
    return (
        <div className={`loading ${classes}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="20" y="32.5" width="10" height="35" fill="#9f0013">
                    <animate attributeName="y" repeatCount="indefinite" dur="1.5384615384615383s" calcMode="spline" keyTimes="0;0.5;1" values="22;32.5;32.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.3076923076923077s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="1.5384615384615383s" calcMode="spline" keyTimes="0;0.5;1" values="56;35;35" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.3076923076923077s"></animate>
                </rect>
                <rect x="45" y="32.5" width="10" height="35" fill="#9f0013">
                    <animate attributeName="y" repeatCount="indefinite" dur="1.5384615384615383s" calcMode="spline" keyTimes="0;0.5;1" values="24.624999999999996;32.5;32.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.15384615384615385s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="1.5384615384615383s" calcMode="spline" keyTimes="0;0.5;1" values="50.75000000000001;35;35" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.15384615384615385s"></animate>
                </rect>
                <rect x="70" y="32.5" width="10" height="35" fill="#9f0013">
                    <animate attributeName="y" repeatCount="indefinite" dur="1.5384615384615383s" calcMode="spline" keyTimes="0;0.5;1" values="24.624999999999996;32.5;32.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="1.5384615384615383s" calcMode="spline" keyTimes="0;0.5;1" values="50.75000000000001;35;35" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                </rect>
            </svg>
        </div>
    )
}

export default Loading