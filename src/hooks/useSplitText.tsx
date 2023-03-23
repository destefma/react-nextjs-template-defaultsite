import React, { useState, useEffect } from 'react';


function useNewLineText(stringValue: string, className?: string) {

    if (stringValue == null || isEmpty(stringValue)) return <p></p>;

    return stringValue.split('\n').map(str => <p key={str} className={className}>{str}</p>);
}

function isEmpty(str: string) {
    return (!str || str.length === 0);
}

export default useNewLineText;

