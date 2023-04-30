import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../../../components/HeaderDiv";
import TitleDiv from "../../../components/TitleDiv";
import Grad from "../../../components/grad";
import Spacer from "../../../components/spacer";
import Title from "../../../components/title";
import styles from "../../../styles/Information.module.css";

const desc = ""

export default function Classes() {
    return (
        <React.Fragment>
            <Grad />
            <div className={styles.container}>
                <Title title="Classes" />
                <TitleDiv />
                <text className={styles.description}>{desc}</text>
            <HeaderDiv />
            </div>
        </React.Fragment>
        )
}