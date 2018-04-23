import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContnent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update, remove } from './billingCycleActions'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {
    
    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alteirar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContnent id='tabList'> <List /> </TabContnent>
                            <TabContnent id='tabCreate'>
                                <Form onSubmit={this.props.create} 
                                      submitLabel='Incluir'
                                      submitClass='primary'/></TabContnent>
                            <TabContnent id='tabUpdate'>
                                <Form onSubmit={this.props.update} 
                                      submitLabel='Alterar'
                                      submitClass='info'/></TabContnent>
                            <TabContnent id='tabDelete'>
                                <Form onSubmit={this.props.remove} 
                                      submitLabel='Excluir'
                                      readOnly='true' 
                                      submitClass='danger'/></TabContnent>
                        </TabsContent>                  
                    </Tabs>
                </Content>
            </div>    
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)