import React from 'react'

export default function Products() {


    
    return (
        <div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card text-white bg-secondary mb-3" style={{boxShadow:'darkgrey 0px 3px 8px 0px'}}>
                        <div class="card-body">
                            <h5 class="card-title">AiCookie</h5>
                            <p class="card-text">Stay compliant with privacy policies, defend against bots & frauds, and personalize experience for your customers with intent mapping.</p>
                            <a className="text-white" href="https://www.causalfunnel.com/products/aicookie" target="_blank" >Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card text-white bg-secondary mb-3" style={{boxShadow:'darkgrey 0px 3px 8px 0px'}}>
                        <div class="card-body">
                            <h5 class="card-title">AiFunnel</h5>
                            <p class="card-text">Build deep visitor profiles, predict persona, personalize user experience and run automated A/B tests to optimize your customer funnel.</p>
                            <a className="text-white" href="https://www.causalfunnel.com/products/aifunnel"  target="_blank" >Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card text-white bg-secondary mb-3" style={{boxShadow:'darkgrey 0px 3px 8px 0px'}}>
                        <div class="card-body">
                            <h5 class="card-title">AiFabric</h5>
                            <p class="card-text">Smart infrastructure to help you deliver a fast and mobile optimized experience to your visitors..</p>
                            <a className="text-white" href="https://www.causalfunnel.com/products/aifabric"  target="_blank" >Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
