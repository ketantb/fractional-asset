import React, { useEffect } from 'react'
import './HowItWorks.css'
import { Typography } from '@mui/material'
import HowItWorksSteps from './howitworks-step/steps'

const array = [
  {
    title: 'A group of people comes together to purchase an asset',
    para: 'The group can consist of individuals, families, friends, or business partners. They pool their resources to purchase the asset together, and each person owns a percentage or fraction of the asset.'
  },
  {
    title: 'Ownership and usage rights are established',
    para: 'The group creates an agreement that outlines how ownership and usage rights will be shared. The agreement typically specifies how the asset will be used, how expenses will be shared, and how the asset will be managed and maintained.'
  },
  {
    title: 'Costs and expenses are shared',
    para: "The group shares the costs and expenses associated with owning the asset. These can include purchase costs, maintenance costs, insurance, and taxes. The expenses are usually divided based on each owner's percentage of ownership."
  },
  {
    title: 'Usage rights are established',
    para: 'The agreement also specifies how usage rights will be shared. For example, if the asset is a vacation property, the agreement may specify how many weeks or months each owner is entitled to use the property each year.'
  },
  {
    title: 'Resale or buyout provisions are established',
    para: " The agreement may include provisions for reselling or buying out shares of the asset. This allows owners to sell their share of the asset to another party or buy out another owner's share."
  }
]


const HowItWorks = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='howitworks-wrapper'>
      <div className='section1'>
        <Typography variant='h4' className='title'>FRACTIONAL ASSETS</Typography>
      </div>

      <div className="fluid-container section2 my-5">

        <div className="row">
          <h4>HOW FRACTIONAL WORKS</h4>
          <div className="col-md-12">

            <ul className="timeline-3">
              {
                array.map((item, i) => {
                  return (
                    <li>
                      <Typography className='title'>{item.title}</Typography>
                      <p className="mt-2">{item.para}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>


        <div className='row-right'>
          <p>
            Suppose a group of 4 friends is interested in owning a vacation property, but they cannot afford to purchase the property outright. Instead, they decide to pool their resources and purchase the property together as fractional owners.

            The vacation property costs $400,000, and each friend contributes $100,000 towards the purchase. As a result, each friend owns a 25% share of the property.

            To determine the usage of the property, the friends can create an agreement that outlines how the property will be used and how the costs and expenses will be shared. For example, they could agree to rotate usage of the property on a yearly basis, with each friend having the property for 3 months out of the year.

            In addition, the friends can agree on how they will handle any maintenance and repair costs for the property. They could choose to divide the costs equally or based on their percentage of ownership.

            If one of the friends decides to sell their share, they can do so to another person or entity, subject to the approval of the other owners. The selling price of the share would be based on the current market value of the property and the percentage of ownership being sold.

            Fractional ownership can be an effective way to share the cost and use of property among multiple owners, while also providing each owner with a percentage of the property's equity and potential profits. However, it is important for all owners to have a clear agreement in place that outlines their rights and responsibilities as owners.
          </p>
        </div>
      </div>
      <section>
        <HowItWorksSteps />
      </section>
    </div>
  )
}

export default HowItWorks