import React from 'react'
import Details from './Details'

export default function CurrentDetails({weather}) {
  return (
                    <ul className="details">
                      <Details
                        wind={weather.current.wind_kph}
                        name={"wind"}
                        unit={"kph"}
                      />
                      <Details
                        wind={weather.current.humidity}
                        name={"humidity"}
                        unit={"%"}
                      />
                      <Details
                        wind={weather.current.pressure_in}
                        name={"pressure"}
                        unit={"in"}
                      />
                      <Details
                        wind={weather.current.vis_km}
                        name={"visibility"}
                        unit={"km"}
                      />
                      <Details
                        wind={weather.current.dewpoint_c}
                        name={"Dew point"}
                        unit={"°C"}
                      />
                    </ul>
  )
}
