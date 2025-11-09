import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { Prisma } from 'generated/prisma';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    // console.log('👋', exception.code, exception.meta, '📦');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.CONFLICT;

        if (!exception.meta || !exception.meta.target) {
          break;
        }

        const model = exception.meta.modelName as string;
        const targets = (exception.meta.target as []).join(',');

        response.status(status).json({
          statusCode: status,
          message: `Could not create or change an ${model}. The '${targets}' field already exists.`,
        });
        break;
      }
      default:
        super.catch(exception, host);
        break;
    }
  }
}
