/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

// Initialize and add the map
function initMap(): void {
  // The location of Uluru
  const penang1 = { lat: 5.4, lng: 100.32 };
  const penang2 = { lat: 5.4, lng: 100.5 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 11,
      center: penang1,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: penang1,
    map: map,
  });

  const marker1 = new google.maps.Marker({
    position: penang2,
    map: map,
  });
}
export { initMap };
