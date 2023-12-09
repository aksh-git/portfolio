import Image from 'next/image'
import React from 'react'
import SkillIcon from '../Skill'
import Label from '../label'
import GroupLabel from './GroupLabel'

function TechStack() {
    return (
        <section id="techStack" className='w-full'>
            <Label>Tech-Stack</Label>
            <div className='flex flex-wrap gap-8 mt-4'>
                {/* Languages */}
                <GroupLabel tag={"Languages"}>
                    {/* <div className='pl-4 p-1 border-l-4 border-primary text-gray-600 font-medium'>Languages</div> */}
                    <div className='flex flex-wrap gap-4 p-4'>
                        <SkillIcon tag={"Java"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg`} alt='Java'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Rust"}>
                            <Image className='' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg`} alt='Rust'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Python"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg`} alt='Python'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"GoLang"}>
                            <Image className='' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg`} alt='GoLang'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"TypeScript"}>
                            <Image className='rounded-lg' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`} alt='TypeScript'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"JavaScript"}>
                            <Image className='rounded-lg' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`} alt='JavaScript'></Image>
                        </SkillIcon>
                    </div>
                </GroupLabel>

                {/* Backend */}
                <GroupLabel tag={"Backend"}>
                    {/* <div className='pl-4 p-1 border-l-4 border-primary text-gray-600 font-medium'>Front-End</div> */}
                    <div className='flex flex-wrap gap-4 p-4'>
                        <SkillIcon tag={"Node Js"}>
                            <Image height={40} width={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg`} alt='Node'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Graphql"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg`} alt='Graphql'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Express Js"}>
                            <Image className='' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg`} alt='Express'></Image>
                        </SkillIcon>
                    </div>
                </GroupLabel>

                {/* Databases */}
                <GroupLabel tag={"Databases"}>
                    {/* <div className='pl-4 p-1 border-l-4 border-primary text-gray-600 font-medium'>Front-End</div> */}
                    <div className='flex flex-wrap gap-4 p-4'>
                        <SkillIcon tag={"MongoDB"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg`} alt='MongoDB'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"MySQL"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg`} alt='MySQL'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"PostgreSQL"}>
                            <Image className='rounded-lg' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg`} alt='PostgreSQL'></Image>
                        </SkillIcon>
                    </div>
                </GroupLabel>

                {/* FrontEnd */}
                <GroupLabel tag={"FrontEnd"}>
                    {/* <div className='pl-4 p-1 border-l-4 border-primary text-gray-600 font-medium'>Front-End</div> */}
                    <div className='flex flex-wrap gap-4 p-4'>
                        <SkillIcon tag={"React Js"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`} alt='React Js'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Next Js"}>
                            <Image className='' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg`} alt='Next JS'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"HTML 5"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`} alt='Html'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"CSS 3"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`} alt='CSS'></Image>
                        </SkillIcon>
                    </div>
                </GroupLabel>

                {/* DEVOPS */}
                <GroupLabel tag={"DevOps"}>
                    {/* <div className='pl-4 p-1 border-l-4 border-primary text-gray-600 font-medium'>Front-End</div> */}
                    <div className='flex flex-wrap gap-4 p-4'>
                        <SkillIcon tag={"Git"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg`} alt='Git'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Github"}>
                            <Image className='' width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg`} alt='Github'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Linux"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg`} alt='Linux'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Kubernetes"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg`} alt='Kubernetes'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"Docker"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg`} alt='Docker'></Image>
                        </SkillIcon>
                        <SkillIcon tag={"AWS"}>
                            <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg`} alt='AWS'></Image>
                        </SkillIcon>

                    </div>
                </GroupLabel>
            </div>
        </section>
    )
}

export default TechStack