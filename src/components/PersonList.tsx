import React, { useState } from "react";
import { Table, Button, Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPersons, deletePerson } from "../features/person/personSlice";
import { Person } from "../features/person/personTypes";
import { Key } from "antd/lib/table/interface";
import { I18n, t } from "react-i18nify";


const PersonList: React.FC = () => {
  const dispatch = useDispatch();
  const persons = useSelector(selectAllPersons);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [personToDelete, setPersonToDelete] = useState<Person | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleDelete = (record: Person) => {
    setPersonToDelete(record);
    setDeleteModalVisible(true);
  };

  const handleEdit = (record: Person) => {
    setSelectedPerson(record);
    setEditModalVisible(true);
  };

  const handleConfirmDelete = () => {
    if (personToDelete) {
      dispatch(deletePerson(personToDelete.id));
      setDeleteModalVisible(false);
      setSelectedRowKeys([]);
      setPersonToDelete(null); 
    }
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false);
  };

  const handleCancelEdit = () => {
    setEditModalVisible(false);
  };

  const handleSaveEdit = () => {
    
    setEditModalVisible(false);
  };

  const handleSelectChange = (selectedKeys: Key[]) => {
    setSelectedRowKeys(selectedKeys);
  };

  const rowSelection: {
    type: 'radio',
    selectedRowKeys: React.Key[],
    onChange: (selectedKeys: React.Key[]) => void
  } = {
    type: 'radio',
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  const columns = [
    {
      title: t("Name"),
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: t("Gender"),
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: t("PhoneNumber"),
      dataIndex: "PhoneNumber",
      key: "PhoneNumber",
    },
    {
      title: t("Nationality"),
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: t("Action"),
      key: "action",
      render: (text: string, record: Person) => (
        <span>
          <Button danger style={{ marginRight: '10px' }} onClick={() => handleDelete(record)}>
            Delete
          </Button>
          <Button onClick={() => handleEdit(record)}>Edit</Button>
        </span>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginLeft: 40 }}>
        <Button
          type="primary"
          onClick={() => {
            const allKeys = persons.map(person => person.id);
            setSelectedRowKeys(allKeys);
          }}
        >
          Select All
        </Button>
      </div>
      <Table
        style={{ padding: "40px" }}
        columns={columns}
        dataSource={persons}
        rowKey="id"
        rowSelection={rowSelection}
      />
      <Modal
        title="Confirm Delete"
        centered
        visible={deleteModalVisible}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
      >
        {personToDelete && (
          <>
            <p>Are you sure you want to delete {personToDelete.firstName}?</p>
          </>
        )}
      </Modal>
      <Modal
        title="Edit Person"
        centered
        visible={editModalVisible}
        onOk={handleSaveEdit}
        onCancel={handleCancelEdit}
      >
        {selectedPerson && (
          <>
            <p>Name: {selectedPerson.firstName}</p>
            <p>Gender: {selectedPerson.Gender}</p>
            <p>Phone Number: {selectedPerson.PhoneNumber}</p>
            <p>Nationality: {selectedPerson.nationality}</p>
            <Input placeholder="Edit name" />
          </>
        )}
      </Modal>
    </>
  );
};

export default PersonList;
