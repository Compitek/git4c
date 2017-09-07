package com.networkedassets.git4c.boundary

import com.networkedassets.git4c.boundary.inbound.DetailsToGetFile
import com.networkedassets.git4c.boundary.outbound.File
import com.networkedassets.git4c.delivery.executor.result.BackendRequest


class GetFileForExistingRepositoryQuery (
        val repository: String,
        val detailsToGetFile: DetailsToGetFile
) : BackendRequest<File>()