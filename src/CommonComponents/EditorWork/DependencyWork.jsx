import React from 'react';

const Block = ({ block }) => {
    const { tagType, text, show, className, backgroundColor, name, children } = block;

    // Render the block
    return (
        <>
            {show && (
                <div className={className}>
                    {tagType && React.createElement(tagType, { style: { backgroundColor } }, text)}
                    {children && children.map((child, index) => <Block key={index} block={child} />)}
                </div>
            )}
        </>
    );
};

const DependencyWork = () => {
    const data = [
        {
            tagType: 'h2',
            text: 'We are here to make your website! 00000',
            show: true,
            className: 'someClass',
            name: 'Block Heading',
            children: [
                {
                    tagType: 'h2',
                    text: 'We are here to make your website11111!',
                    show: true,
                    className: 'someClass',
                    name: 'Block Heading',
                    children: [
                        {
                            tagType: 'h2',
                            text: 'We are here to make your website!22',
                            show: true,
                            className: 'someClass',
                            name: 'Block Heading',
                            children: [
                                {
                                    tagType: 'h2',
                                    text: 'We are here to make your website! 333333',
                                    show: true,
                                    className: 'someClass',
                                    name: 'Block Heading',
                                    children: [{
                                        tagType: 'h2',
                                        text: 'We are here to make your website!22',
                                        show: true,
                                        className: 'someClass',
                                        name: 'Block Heading',
                                        children: [
                                            {
                                                tagType: 'h2',
                                                text: 'We are here to make your website! 333333',
                                                show: true,
                                                className: 'someClass',
                                                name: 'Block Heading',
                                                children: [],
                                            },
                                        ],
                                    },],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            tagType: 'p',
            text: '',
            show: true,
            className: 'someClass',
            backgroundColor: '',
            name: 'Block Description',
        },
    ];

    return (
        <div>
            {data.map((block, index) => (
                <Block key={index} block={block} />
            ))}
        </div>
    );
};

export default DependencyWork;
