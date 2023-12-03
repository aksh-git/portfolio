'use client';

import React from "react";
import Typewriter from 'typewriter-effect';

function MyTypeWriter({data}) {
    return (
        <Typewriter options={{
            strings: data,
            autoStart: true,
            loop: true,
        }} />
    )
}

export default MyTypeWriter;