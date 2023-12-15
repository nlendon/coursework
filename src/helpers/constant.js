import NoIcon from "../images/profile.jpg";
import {Tag} from "antd";
import UpdateNode from "../components/Modals/UpdateModals/UpdateNode";
import DeleteConfirm from "../components/Modals/DeleteModals/DeleteConfirm";

const blockedUrl = ['licdn', 'facebook', 'instagram', 'bok']

export const NodeTypes = [
    "Person",
    "Faculty",
    "Defence_Theme",
    "Program",
    "Paper_publication",
    "Organization",
    "Chair",
    "Research_project",
    "Scientific_Journal",
    "Field",
    "Institute",
    "University",
    "Year",
    "Training",
    "Position",
    "Company",
]

export const NodeTypeProps = [
    {
        type: "Person",
        props: [
            "Address",
            "Birth_date",
            "Bok_link",
            "Bok_profile_image_link",
            "Email",
            "First_name",
            "Link_to_other_profiles",
            "Middle_name",
            "Phone",
            "Surname",
            "name"
        ]
    },
    {
        type: "Faculty",
        props: [
            "Faculty_id",
            "name"
        ]
    },
    {
        type: "Defence_Theme",
        props: [
            "Abstruct",
            "Defence_date",
            "Defence_type",
            "Title"
        ]
    },
    {
        type: "Program",
        props: ["name"]
    },
    {
        type: "Paper_publication",
        props: ["name"]
    },
    {
        type: "Chair"
        , props: ["Chair_id", "Basic"]
    },
    {
        type: "Research_project",
        props: ["name"]
    },
    {
        type: "Scientific_Journal",
        props: ["name"]
    },
    {
        type: "Field",
        props: ["LIB_ID", "name"]
    },
    {
        type: "Institute",
        props: ["name"]
    },
    {
        type: "University",
        props: [
            "Address",
            "Director",
            "Email",
            "Phone",
            "Univer_id",
            "Web",
            "name"
        ]
    },
    {
        type: "Year",
        props: ["name"]
    },
    {
        type: "Training",
        props: ["name"]
    },
    {
        type: "Position",
        props: ["name"]
    },
    {
        type: 'Company',
        props: ["name"]
    },
    {
        type: 'Organization',
        props: ["name"]
    }
];

export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (name, info) => {
            let icon;
            blockedUrl.forEach((blocked) => {
                if (!icon) icon = info?.icon?.includes(blocked);
            });
            if (icon) {
                return (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={NoIcon} alt="icon" style={{width: '32px', height: '32px', borderRadius: '25px'}}/>
                        <span style={{marginLeft: '10px'}}>{name}</span>
                    </div>
                )
            } else {
                return (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={info.icon || NoIcon} alt="icon"
                             style={{width: '32px', height: '32px', borderRadius: '25px'}}/>
                        <span style={{marginLeft: '10px'}}>{name}</span>
                    </div>
                )
            }
        }
    },
    {
        title: 'Type',
        key: 'type',
        dataIndex: 'type',
        render: (tag) => (
            <span>
                <Tag color={'#F2728126'} key={tag} style={{width: '50%', textAlign: 'center', borderRadius: '8px'}}>
                    <span style={{color: '#000'}}>{tag}</span>
                </Tag>
            </span>
        ),
    },
    {
        title: 'Actions',
        key: 'action',
        dataIndex: 'action',
        render: (button, info) => (
            <span>
                <UpdateNode info={info}/>
                <DeleteConfirm info={info}/>
         </span>
        ),
    }
];

const bordered = false;
const loading = false;
const size = 'small';
const showHeader = true;
const tableLayout = undefined;
const pagination = false;
const indentSize = 1;
const scroll = {
    scrollToFirstRowOnChange: true,
    y: 600
}

export const tableProps = {
    bordered,
    loading,
    indentSize,
    scroll,
    size,
    pagination,
    showHeader,
    tableLayout,
}

const optionFilterProp = 'children';
const showSearch = true;
const filterOption = (input, option) => (option?.label ?? '').includes(input)
const filterSort = (optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
const style = {margin: '10px', width: '100%'}

export const selectProps = {
    optionFilterProp,
    showSearch,
    filterOption,
    filterSort,
    style,
}
