import React from 'react'
import { Apply } from '../components/Apply'

export const applyPath = '/apply-to-volunteer/:id'

export const applyRoute = {
    path: applyPath,
    element: <Apply />
}
