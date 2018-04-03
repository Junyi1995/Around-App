import React from 'react';
import $ from 'jquery';
import { Modal, Button, message } from 'antd';
import  {WrappedCreatePostForm} from './CreatePostForm';
import {API_ROOT, TOKEN_KEY, POS_KEY} from "../constants"

export class CreatePostButton extends React.Component {
    state = {
        visible: false,
        confirmLoading: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.form.validateFields((err, values) => {
            if(!err) {
                console.log(values);
                this.setState({confirmLoading: true,});
                const {lat, lon} = JSON.parse(localStorage.getItem(POS_KEY));
                const formData = new FormData();
                formData.set('lat', lat);
                formData.set('lon', lon);
                formData.set('message', values.message);
                formData.set('lat', values.image[0]);
                $.ajax({
                    url: `${API_ROOT}/post`,
                    method: 'POST',
                    data: formData,
                    headers: {
                        Authorization: `${localStorage.getItem(TOKEN_KEY)}`,
                    },
                    processData: false,
                    contentType:false,
                    dataType: 'text',
                }).then(() => {
                    message.success('created a post successfully!');
                    this.props.loadNearbyPosts().then(() => {
                        this.setState({
                            visible:false,
                            confirmLoading: false,
                        });
                    });
                }, (response) => {
                    message.error(response.responseText);
                }).catch((error) => {
                    console.log(error);
                });

                // setTimeout(() => {
                //     this.setState({
                //         visible: false,
                //         confirmLoading: false,
                //     });
                // }, 2000);
            }
        });

    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    saveFormRef = (form) => {
        this.form = form; // just for store the form object
    }
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Create New Post</Button>
                <Modal title="Create New Post"
                       visible={visible}
                       onOk={this.handleOk}
                       okText = "Create"
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <WrappedCreatePostForm ref = {this.saveFormRef}/>
                </Modal>
            </div>
        );
    }
}